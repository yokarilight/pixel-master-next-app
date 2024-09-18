import React, { useState } from 'react';
import { Stage, Layer, Rect } from 'react-konva';
import { HexColorPicker } from 'react-colorful';

const KonvaCanvas = () => {
  const [width, setWidth] = useState<number>(16); // default canvas width (in pixels)
  const [height, setHeight] = useState<number>(16); // default canvas height (in pixels)
  const [pixelSize] = useState<number>(20); // each pixel size
  const [color, setColor] = useState<string>('#000000'); // current selected color
  const [pixels, setPixels] = useState<Array<{ x: number, y: number, color: string }>>([]);

  const handleClick = (x: number, y: number) => {
    setPixels([...pixels, { x, y, color }]);
  };

  return (
    <div className='flex flex-col items-center'>
      <h1>Pixel Creator</h1>

      <div>
        <label>
          Width:
          <input
            type='number'
            value={width}
            onChange={(e) => setWidth(parseInt(e.target.value))}
						className='mr-2.5'
          />
        </label>
        <label>
          Height:
          <input
            type='number'
            value={height}
            onChange={(e) => setHeight(parseInt(e.target.value))}
          />
        </label>
      </div>

      <div className='flex m-5'>
        <HexColorPicker color={color} onChange={setColor} />
      </div>

      <Stage width={width * pixelSize} height={height * pixelSize}>
        <Layer>
          {Array.from({ length: width }).map((_, x) =>
            Array.from({ length: height }).map((_, y) => (
              <Rect
                key={`${x}-${y}`}
                x={x * pixelSize}
                y={y * pixelSize}
                width={pixelSize}
                height={pixelSize}
                fill={pixels.find((p) => p.x === x && p.y === y)?.color || '#fff'}
                stroke='#ccc'
                onClick={() => handleClick(x, y)}
              />
            ))
          )}
        </Layer>
      </Stage>
    </div>
  );
};

export default KonvaCanvas;
