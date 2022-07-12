import React from 'react'
import { Card, Button } from 'ui-neumorphism';
import { FaGithub } from 'react-icons/fa';

const openGitHub = () => {
  window.open('https://github.com/gushmazuko/chechen-latin-keyboard-layout', '_blank')
}

export function Header() {

  return (
    <Card
      className='d-flex justify-content-between p-2'
    >
      <div>
        <Button text>
          <h1>Noxçiyŋ Latin Abat</h1>
        </Button>
      </div>
      <div>
        <Button
          text
          onClick={openGitHub}
        >
         <FaGithub />
        </Button>
      </div>
    </Card>
  )
}
