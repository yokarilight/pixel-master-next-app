import React, { useState, useRef } from 'react';
import Konva from 'konva';
import { Stage, Layer, Rect } from 'react-konva';
import { HexColorPicker } from 'react-colorful';
import { ArrowUturnLeftIcon, ArrowPathIcon } from '@heroicons/react/24/solid';
import InputField from '@/components/inputField';
import ExportBtn from '@/components/exportBtn';
import ActionBtn from '@/components/actionBtn';
import { pixelSize } from '@/constants';
import { getContrastColor } from '@/utils';

const KonvaCanvas = () => {
  const [width, setWidth] = useState<number>(16);
  const [height, setHeight] = useState<number>(16);
  const [color, setColor] = useState<string>('#000000'); // current selected color
  const [pixels, setPixels] = useState<Array<{ x: number, y: number, color: string }>>([]); // array of pixels
  const [history, setHistory] = useState<Array<Array<{ x: number, y: number, color: string }>>>([]); // history of pixel states
  const stageRef = useRef<Konva.Stage>(null); // reference to the stage for exporting

  const handleClick = (x: number, y: number) => {
    setHistory([...history, pixels]);
    setPixels([...pixels, { x, y, color }]);
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const prevState = history[history.length - 1];
      setPixels(prevState);
      setHistory(history.slice(0, -1));
    }
  };

  const handleReset = () => {
    setPixels([]);
    setHistory([]);
  };

  const exportImage = (format: 'png' | 'jpeg' | 'svg') => {
    if (stageRef.current) {
      const uri = stageRef.current.toDataURL({ pixelRatio: 2, mimeType: `image/${format}` });
      const link = document.createElement('a');
      link.download = `pixel-master.${format}`;
      link.href = uri;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-4xl font-bold my-6'>Pixel Master</h1>
      <h2 className='text-2xl mb-4'>Enter the dimensions of the canvas and choose a color</h2>

      <div className='flex'>
        <InputField labelName='Width' value={width} max={25} onChange={setWidth} inputClassName='text-black mx-2.5' />
        <InputField labelName='Height' value={height} max={25} onChange={setHeight} inputClassName='text-black ml-2.5' />
      </div>

      <div className='flex items-center m-5'>
        <HexColorPicker color={color} onChange={setColor} />
        <div className='ml-2.5 flex items-center'>
          The Color is
          <span 
            className='ml-2 px-3 py-1 rounded text-white' 
            style={{ 
              backgroundColor: color,
              color: getContrastColor(color)
            }}
          >
            {color}
          </span>
        </div>
      </div>

      <div className='flex mb-4'>
        <ActionBtn 
          onClick={handleUndo} 
          label='Undo' 
          icon={<ArrowUturnLeftIcon className='h-5 w-5' />}
        />
        <ActionBtn 
          onClick={handleReset} 
          label='Reset' 
          icon={<ArrowPathIcon className='h-5 w-5' />}
        />
      </div>

      <Stage width={width * pixelSize} height={height * pixelSize} ref={stageRef}>
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

      <div className='mt-5 mb-8'>
        <ExportBtn onClick={() => exportImage('png')} format='png' />
        <ExportBtn onClick={() => exportImage('jpeg')} format='jpg' />
        <ExportBtn onClick={() => exportImage('svg')} format='svg' />
      </div>
    </div>
  );
};

export default KonvaCanvas;
