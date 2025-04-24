export default function FormError({error}) {
  return (
    <div>
        {error && <p className="mt-1 text-red-500">{error.message}</p>}
    </div>
  )
}
