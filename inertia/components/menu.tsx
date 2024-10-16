import { Link } from '@inertiajs/react'
import React from 'react'
import Text from './Text'

interface MenuProps {
  isOpen: boolean
  onClose: () => void
}

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-black z-50 transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} ease-in-out duration-300`}
      onClick={onClose}
    >
      <div className="flex flex-col items-start px-12 justify-center h-full text-white">
        <Link href="/" className="text-5xl mb-4" onClick={onClose}>
          <Text as="span">Home</Text>
        </Link>
        <Link href="#pricing" className="text-5xl mb-4" onClick={onClose}>
          <Text as="span">Pricing</Text>
        </Link>
        <Link href="#contact" className="text-5xl mb-4" onClick={onClose}>
          <Text as="span">Contact</Text>
        </Link>
      </div>
    </div>
  )
}

export default Menu
