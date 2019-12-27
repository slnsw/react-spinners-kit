import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(-360deg);
    }
`;

const rotateBall = props => keyframes`
    ${(((props.size / 2 / props.countBalls) * (props.index - 1)) / props.size) * 100}% {
        opacity: 0;
    }
    ${(((props.size / 2 / props.countBalls + 0.0001) * (props.index - 1)) / props.size) * 100}% {
        opacity: 1;
        transform: ${`rotate(${0 - (360 / props.countBalls) * (props.index - 2)}deg)`};
    }
    ${(((props.size / 2 / props.countBalls) * (props.index - 0) + 2) / props.size) * 100}% {
        transform: ${`rotate(${0 - (360 / props.countBalls) * (props.index - 1)}deg)`};
    }
    ${((props.size / 2 + (props.size / 2 / props.countBalls) * (props.index - 0) + 2) / props.size) * 100}% {
        transform: ${`rotate(${0 - (360 / props.countBalls) * (props.index - 1)}deg)`};
    }
    100% {
        transform: ${`rotate(${0 - (360 / props.countBalls) * (props.countBalls - 1)}deg)`};
        opacity: 1;
    }
`;

const getBalls = ({ countBalls, radius, angle, color, size, ballSize, sizeUnit }) => {
    const balls = [];
    const offset = ballSize / 2;
    for (let i = 0; i < countBalls; i++) {
        const y = Math.sin(angle * i * (Math.PI / 180)) * radius - offset;
        const x = Math.cos(angle * i * (Math.PI / 180)) * radius - offset;
        balls.push(
            <Ball
                countBalls={countBalls}
                color={color}
                ballSize={ballSize}
                size={size}
                sizeUnit={sizeUnit}
                x={y}
                y={x}
                key={i.toString()}
                index={i + 1}
            />,
        );
    }
    return balls;
};

export const MetroSpinner = ({ size, color, loading, sizeUnit }) => {
    const radius = size / 2;
    const countBalls = 9;
    const ballSize = size / 8;
    const angle = 360 / countBalls;
    return (
        loading && (
            <Wrapper size={size} sizeUnit={sizeUnit}>
                {getBalls({
                    countBalls,
                    radius,
                    angle,
                    color,
                    size,
                    ballSize,
                    sizeUnit,
                })}
            </Wrapper>
        )
    );
};

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${props => `${props.size}${props.sizeUnit}`};
    height: ${props => `${props.size}${props.sizeUnit}`};
    animation: ${rotate} 3s infinite ease-in;
`;

const Ball = styled.div`
    position: absolute;
    width: ${props => `${props.size}${props.sizeUnit}`};
    height: ${props => `${props.size}${props.sizeUnit}`};
    animation: ${rotateBall} 2s infinite linear;
    transform: ${props => `rotate(${(360 / props.countBalls) * props.index}deg)`};
    opacity: 0;
    &:before {
        content: "";
        position: absolute;
        left: 50%;
        top: 0%;
        width: ${props => `${props.ballSize}${props.sizeUnit}`};
        height: ${props => `${props.ballSize}${props.sizeUnit}`};
        background-color: ${props => `${props.color}`};
        transform: translateX(-50%);
        border-radius: 50%;
    }
`;

MetroSpinner.defaultProps = {
    loading: true,
    size: 40,
    color: "#fff",
    sizeUnit: "px",
};

MetroSpinner.propTypes = {
    loading: PropTypes.bool,
    size: PropTypes.number,
    color: PropTypes.string,
    sizeUnit: PropTypes.string,
};
