'use client';

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';
import { format } from 'date-fns';


interface Service {
  _id: string;
  name: string;
  sessionDuration: number;
  fee?: string;
  cardColor?: string;
}

interface TimeSlot {
  startTime: string;
  endTime: string;
}

export function BookingFlow() {
  // Step tracker: 1. Service/Mode -> 2. Date/Time -> 3. Contact Form -> 4. Success State
  const [step, setStep] = useState(1);
  const [services, setServices] = useState<Service[]>([]);
  const [loadingServices, setLoadingServices] = useState(true);

  // User Selections
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [sessionMode, setSessionMode] = useState('Online');
  const [selectedDate, setSelectedDate] = useState('');
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');

  // Form handling
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');
  const [successData, setSuccessData] = useState<any>(null);

  // Default Mock Services if Sanity dataset is empty
  const defaultServices: Service[] = [
    { _id: 'anxiety-overwhelm', name: 'Anxiety & Overwhelm Consultation', sessionDuration: 50, fee: '₹2,500' },
    { _id: 'burnout-exhaustion', name: 'Burnout & Exhaustion Healing', sessionDuration: 50, fee: '₹2,500' },
    { _id: 'relationship-dynamics', name: 'Relationship Repair Therapy', sessionDuration: 50, fee: '₹2,500' }
  ];

  useEffect(() => {
    // Attempt fetching services, fallback to default mock array
    setServices(defaultServices);
    setLoadingServices(false);
  }, []);

  // Fetch slots on date change
  useEffect(() => {
    if (!selectedDate) return;
    async function fetchSlots() {
      setLoadingSlots(true);
      setSelectedTime('');
      try {
        const res = await fetch(`/api/availability?date=${selectedDate}`);
        const data = await res.json();
        setSlots(data.slots || []);
      } catch (e) {
        setSlots([]);
      } finally {
        setLoadingSlots(false);
      }
    }
    fetchSlots();
  }, [selectedDate]);

  const handleFormSubmit = async (formData: any) => {
    setServerError('');
    setSubmitting(true);
    try {
      const payload = {
        clientName: formData.clientName,
        email: formData.email,
        phone: formData.phone,
        serviceId: selectedService?._id,
        sessionMode,
        appointmentDate: selectedDate,
        startTime: selectedTime,
        message: formData.message,
        consent: formData.consent === true || formData.consent === 'true'
      };

      const res = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const result = await res.json();
      if (!res.ok) {
        setServerError(result.error || 'Failed to complete booking reservation.');
      } else {
        setSuccessData(result.booking);
        setStep(4);
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      }
    } catch (e) {
      setServerError('An unexpected network issue occurred.');
    } finally {
      setSubmitting(false);
    }
  };

  if (step === 4 && successData) {
    return (
      <div className="bg-white rounded-3xl p-8 border border-muted-violet/10 shadow-md text-center flex flex-col items-center gap-6 max-w-xl mx-auto">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl">
          ✓
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="font-serif text-3xl font-bold text-deep-violet">Booking Confirmed!</h2>
          <p className="text-sm text-muted-text font-light">
            Your appointment has been successfully scheduled. A confirmation summary is listed below.
          </p>
        </div>

        <div className="w-full bg-soft-ivory p-6 rounded-2xl border border-muted-violet/5 flex flex-col gap-3 text-left text-sm text-deep-violet">
          <div><strong className="font-semibold">Reference ID:</strong> {successData.reference}</div>
          <div><strong className="font-semibold">Consultation:</strong> {successData.serviceName}</div>
          <div><strong className="font-semibold">Format:</strong> {successData.sessionMode}</div>
          <div><strong className="font-semibold">Date:</strong> {successData.appointmentDate}</div>
          <div><strong className="font-semibold">Time slot:</strong> {successData.startTime} - {successData.endTime}</div>
        </div>

        <button
          onClick={() => {
            reset();
            setSelectedService(null);
            setSelectedDate('');
            setSelectedTime('');
            setStep(1);
          }}
          className="px-6 py-2.5 bg-warm-coral hover:bg-warm-coral/90 text-white rounded-full font-medium"
        >
          Book Another Session
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl border border-muted-violet/10 shadow-md overflow-hidden">
      
      {/* Step Header */}
      <div className="bg-deep-violet px-8 py-6 text-white flex justify-between items-center">
        <h2 className="font-serif text-xl font-medium">Book a Consultation</h2>
        <span className="text-xs font-sans text-warm-sand uppercase tracking-wider">
          Step {step} of 3
        </span>
      </div>

      <div className="p-8">
        
        {/* Step 1: Service selection */}
        {step === 1 && (
          <div className="flex flex-col gap-6">
            <h3 className="font-serif text-lg font-bold text-deep-violet">Select Session Format & Mode</h3>
            
            <div className="flex flex-col gap-3">
              <label className="text-xs font-sans font-semibold text-muted-text uppercase tracking-wider">
                Select Service Type
              </label>
              {loadingServices ? (
                <div className="text-sm text-muted-text animate-pulse">Loading choices...</div>
              ) : (
                <div className="flex flex-col gap-2">
                  {services.map((s) => (
                    <button
                      key={s._id}
                      onClick={() => setSelectedService(s)}
                      className={`p-4 rounded-xl border text-left flex justify-between items-center transition-colors ${
                        selectedService?._id === s._id
                          ? 'border-warm-coral bg-warm-coral/5 text-deep-violet font-semibold'
                          : 'border-muted-violet/10 text-muted-text hover:bg-soft-ivory'
                      }`}
                    >
                      <span>{s.name}</span>
                      <span className="text-xs font-semibold text-warm-coral">{s.fee || '₹2,500'}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-xs font-sans font-semibold text-muted-text uppercase tracking-wider">
                Format Mode
              </label>
              <div className="grid grid-cols-2 gap-4">
                {['Online', 'In-Person'].map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setSessionMode(mode)}
                    className={`p-3 rounded-xl border text-center transition-colors ${
                      sessionMode === mode
                        ? 'border-warm-coral bg-warm-coral/5 text-deep-violet font-semibold'
                        : 'border-muted-violet/10 text-muted-text hover:bg-soft-ivory'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            <button
              disabled={!selectedService}
              onClick={() => setStep(2)}
              className="mt-4 w-full py-3 bg-warm-coral hover:bg-warm-coral/90 text-white rounded-full font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue to Schedule
            </button>
          </div>
        )}

        {/* Step 2: Date & Time selector */}
        {step === 2 && (
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-bold text-deep-violet">Choose Date & Available Time</h3>
              <button onClick={() => setStep(1)} className="text-xs text-warm-coral hover:underline">
                Back
              </button>
            </div>

            <div className="flex flex-col gap-3">
              <label className="text-xs font-sans font-semibold text-muted-text uppercase tracking-wider">
                Select Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={selectedDate}
                  min={format(new Date(), 'yyyy-MM-dd')}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-3 border border-muted-violet/20 rounded-xl font-sans text-sm focus:outline-none focus:border-warm-coral"
                />
              </div>
            </div>

            {selectedDate && (
              <div className="flex flex-col gap-3">
                <label className="text-xs font-sans font-semibold text-muted-text uppercase tracking-wider">
                  Available Time Slots
                </label>
                {loadingSlots ? (
                  <div className="text-xs text-muted-text animate-pulse">Calculating therapist schedules...</div>
                ) : slots.length === 0 ? (
                  <div className="p-4 bg-amber-50 text-amber-700 rounded-xl text-xs">
                    No open availability slots found on this date.
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-2">
                    {slots.map((slot) => (
                      <button
                        key={slot.startTime}
                        onClick={() => setSelectedTime(slot.startTime)}
                        className={`p-2.5 rounded-lg border text-xs font-medium text-center transition-colors ${
                          selectedTime === slot.startTime
                            ? 'border-warm-coral bg-warm-coral/10 text-deep-violet font-semibold'
                            : 'border-muted-violet/10 text-muted-text hover:bg-soft-ivory'
                        }`}
                      >
                        {slot.startTime}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            <button
              disabled={!selectedDate || !selectedTime}
              onClick={() => setStep(3)}
              className="w-full py-3 bg-warm-coral hover:bg-warm-coral/90 text-white rounded-full font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Continue to Personal Info
            </button>
          </div>
        )}

        {/* Step 3: Registration Form */}
        {step === 3 && (
          <form onSubmit={handleSubmit(handleFormSubmit)} className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-lg font-bold text-deep-violet">Confirm Details</h3>
              <button type="button" onClick={() => setStep(2)} className="text-xs text-warm-coral hover:underline">
                Back
              </button>
            </div>

            {serverError && (
              <div className="p-4 bg-red-50 text-red-700 border border-red-200 rounded-xl text-xs">
                {serverError}
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-sans font-semibold text-muted-text uppercase tracking-wider">
                Full Name
              </label>
              <input
                type="text"
                {...register('clientName', { required: 'Name is required' })}
                placeholder="Your name"
                className="p-3 border border-muted-violet/20 rounded-xl font-sans text-sm focus:outline-none focus:border-warm-coral"
              />
              {errors.clientName && (
                <span className="text-[10px] text-red-500 font-sans">{String(errors.clientName.message)}</span>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-sans font-semibold text-muted-text uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  placeholder="name@example.com"
                  className="p-3 border border-muted-violet/20 rounded-xl font-sans text-sm focus:outline-none focus:border-warm-coral"
                />
                {errors.email && (
                  <span className="text-[10px] text-red-500 font-sans">{String(errors.email.message)}</span>
                )}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-sans font-semibold text-muted-text uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  type="tel"
                  {...register('phone', { required: 'Contact phone is required' })}
                  placeholder="e.g. +91 98765 43210"
                  className="p-3 border border-muted-violet/20 rounded-xl font-sans text-sm focus:outline-none focus:border-warm-coral"
                />
                {errors.phone && (
                  <span className="text-[10px] text-red-500 font-sans">{String(errors.phone.message)}</span>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-sans font-semibold text-muted-text uppercase tracking-wider">
                Message / Background Notes (Optional)
              </label>
              <textarea
                rows={3}
                {...register('message')}
                placeholder="Provide details about symptoms, goals, or scheduling queries..."
                className="p-3 border border-muted-violet/20 rounded-xl font-sans text-sm focus:outline-none focus:border-warm-coral resize-none"
              />
            </div>

            <div className="flex items-start gap-2.5 py-2">
              <input
                type="checkbox"
                id="consent"
                {...register('consent', { required: 'Consent is required' })}
                className="mt-1 accent-warm-coral"
              />
              <label htmlFor="consent" className="text-xs text-muted-text leading-relaxed font-light">
                I authorize the clinical practice of Dr. Avani to contact me regarding this consultation appointment and consent to safe patient privacy guidelines.
              </label>
            </div>
            {errors.consent && (
              <span className="text-[10px] text-red-500 font-sans -mt-2">{String(errors.consent.message)}</span>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="mt-2 w-full py-3 bg-warm-coral hover:bg-warm-coral/90 text-white rounded-full font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {submitting ? 'Reserving slot...' : 'Confirm Appointment'}
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
