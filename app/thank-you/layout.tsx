export const metadata = {
  title: 'Thank You',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <>{children}</>
    </div>
  )
}
