import { useState, useEffect, useRef } from "react";

interface FollowCursorDivProps {
  children: React.ReactNode;
}

const FollowCursorDiv = ({ children }: FollowCursorDivProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMouseMoving, setIsMouseMoving] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (divRef.current) {
        const rect = divRef.current.getBoundingClientRect();
        const divCenterX = rect.left + rect.width / 2;
        const divCenterY = rect.top + rect.height / 2;

        let deltaX = (event.clientX - divCenterX) * 0.02;
        let deltaY = (event.clientY - divCenterY) * 0.04;

        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

        const maxDistance = 20;
        if (distance > maxDistance) {
          const scalingFactor = maxDistance / distance;
          deltaX *= scalingFactor;
          deltaY *= scalingFactor;
        }

        setPosition({
          x: deltaX,
          y: deltaY,
        });

        setIsMouseMoving(true);
      }
    };

    const handleMouseStop = () => {
      setIsMouseMoving(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseStop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseStop);
    };
  }, []);

  useEffect(() => {
    if (!isMouseMoving) {
      const timeoutId = setTimeout(() => {
        setPosition({ x: 0, y: 0 });
      }, 500);
      return () => clearTimeout(timeoutId);
    }
  }, [isMouseMoving]);

  return (
    <div
      ref={divRef}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: "transform 2s ease-out",
      }}
      className="flex items-center justify-center"
    >
      {children}
    </div>
  );
};

export default FollowCursorDiv;
