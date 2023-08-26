import { Link } from 'react-router-dom'

export default function TestNav() {
  return (
    <div className="fixed left-0 top-0 z-10 flex w-full items-center justify-between p-3">
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/contact">contact</Link>
    </div>
  )
}
