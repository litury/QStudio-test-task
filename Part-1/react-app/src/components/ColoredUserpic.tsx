import { useState } from 'react';

type ColoredUserPicProps = {
    src: string;
    size: number;
    margin: number;
    backgroundColor: string;
    colors: string[];
    hoverColors: string[];
    colorWidth: number;
};

const ColoredUserPic = (props: ColoredUserPicProps) => {
    const { src, size, margin, backgroundColor, colors, hoverColors, colorWidth } = props;
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const gradientColors = isHovered ? hoverColors : colors;

    const generateGradient = (colors: string[]) => {
        return `linear-gradient(135deg, ${colors.join(', ')})`;
    };

    const imageSize = size - 2 * (margin + colorWidth);

    return (
        <div
            style={{
                width: size, // Общий размер компонента
                height: size,
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                background: generateGradient(gradientColors),
                padding: colorWidth, // Размер градиентной рамки
                boxSizing: 'border-box',
                transition: 'background 0.3s ease',
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div
                style={{
                    width: imageSize, // Размер изображения с учетом рамки и отступов
                    height: imageSize,
                    borderRadius: '50%',
                    padding: margin, // Отступ между рамкой и изображением
                    backgroundColor: backgroundColor, // Фоновый цвет отступа
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    boxSizing: 'border-box',
                }}
            >
                <img
                    src={src}
                    alt="Userpic"
                    style={{
                        width: '100%', // Размер изображения
                        height: '100%', // Размер изображения
                        borderRadius: '50%',
                        objectFit: 'cover',
                    }}
                />
            </div>
        </div>
    );
};

export default ColoredUserPic;




