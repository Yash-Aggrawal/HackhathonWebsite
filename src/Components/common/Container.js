export default function Container({ children }) {
  return (
    <div className="max-w-xs xs:max-w-sm sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-7xl mx-auto py-12">
      { children }
    </div>
  )
}
