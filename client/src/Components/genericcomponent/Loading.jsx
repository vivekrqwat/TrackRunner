export default function Loading({ message = "Loading..." }) {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-3">
      <div className="h-7 w-7 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      <span className="text-sm text-gray-700">{message}</span>
    </div>
  );
}
