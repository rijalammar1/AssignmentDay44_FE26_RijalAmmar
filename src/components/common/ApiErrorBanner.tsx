interface ApiErrorBannerProps {
  message: string
}

export const ApiErrorBanner = ({ message }: ApiErrorBannerProps) => {
  return (
    <div
      className="rounded-lg bg-red-50 p-4 text-center text-sm text-red-600"
      role="alert"
    >
      {message}. Pastikan json-server berjalan di port 3001.
    </div>
  )
}
