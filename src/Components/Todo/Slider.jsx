import { Slider } from '@mantine/core';
import { useHover } from '@mantine/hooks';
export const SliderBar = ({handleChange}, defaultValues) => {
    const { hovered, ref } = useHover();  
    return (
        <Slider
            className='slider'
            defaultValue={defaultValues}
            min={1}
            max={5}
            ref={ref}
            label={null}
            onChange={handleChange}
            thumbSize={17}
            styles={{
                thumb: {
                transition: 'opacity 150ms ease',
                opacity: hovered ? 1 : 0,
                },

                dragging: {
                opacity: 1,
                },
            }}
        />
    )
}
