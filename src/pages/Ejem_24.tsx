import { useRef, useState, type MouseEvent as ReactMouseEvent } from 'react';

export default function Ejem_24() {
  function DraggableBox() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [draggin, setDraggin] = useState(false);
    let offsetRef = useRef({ x: 0, y: 0 });

    function handleMouseDown(e: ReactMouseEvent<HTMLDivElement>) {
      setDraggin(true);

      offsetRef.current = { x: e.clientX - position.x, y: e.clientY - position.y };

      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mousemove', handleMouseMove);
    }

    function handleMouseMove(e : MouseEvent) {
      const newX = e.clientX - offsetRef.current.x;
      const newY = e.clientY - offsetRef.current.y;


      setPosition({ x: newX, y: newY });
    }

    function handleMouseUp(e : MouseEvent) {
      setDraggin(false);

      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mousemove', handleMouseMove);
    }
    return (
      <div
        style={{
          backgroundColor: '#8c8c8c',
          position: 'relative',
          width: '100vw',
          height: '100vh',
          overflow : "hidden"
        }}
      >
        <div
          onMouseDown={handleMouseDown}
          style={{
            position: 'absolute',
            backgroundColor: draggin ? '#C88310' : '#FAC898',
            width: 100,
            height: 100,
            color: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            userSelect: 'none',
            cursor: 'grab',
            borderRadius: 8,
            top: position.y,
            left: position.x,
          }}
        >
          Arrástrame
        </div>
      </div>
    );
  }

  return (
    <div>
      <DraggableBox />
    </div>
  );
}
