'use client';

import Link from 'next/link';

interface MenuItem {
  label: string;
  path: string;
  children?: MenuItem[];
}

export default function DesktopLnb({
  activeMainMenu,
}: {
  activeMainMenu?: MenuItem;
}) {
  return (
    <>
      <h3>PC lnb list</h3>
      <ul className='depth2'>
        {activeMainMenu?.children?.map((child) => (
          <li key={child.label}>
            <Link href={`${activeMainMenu?.path}/${child.path}`}>
              {child.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
