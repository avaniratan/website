import React from 'react';

export default function WebsiteTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="page-transition">{children}</div>;
}