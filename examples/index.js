import React from "react";
import ReactDOM from "react-dom";
// import Prism from "react-syntax-highlighter/dist/esm/prism";
// import atomOneDark from "react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark";
import {
    SwapSpinner,
    BarsSpinner,
    BallSpinner,
    GridSpinner,
    WaveSpinner,
    PushSpinner,
    FireworkSpinner,
    StageSpinner,
    HeartSpinner,
    GuardSpinner,
    CircleSpinner,
    SpiralSpinner,
    PulseSpinner,
    SequenceSpinner,
    DominoSpinner,
    ImpulseSpinner,
    CubeSpinner,
    FillSpinner,
    SphereSpinner,
    FlagSpinner,
    ClapSpinner,
    RotateSpinner,
    SwishSpinner,
    GooSpinner,
    CombSpinner,
    PongSpinner,
    RainbowSpinner,
    RingSpinner,
    HoopSpinner,
    FlapperSpinner,
    MagicSpinner,
    JellyfishSpinner,
    TraceSpinner,
    ClassicSpinner,
    WhisperSpinner,
    MetroSpinner,
} from "../src";

const SpinnerWrapper = ({ children, name }) => {
    return (
        <div className="loader-item">
            {children}
            <div className="subcode">
                {/* <Prism.SyntaxHighlighter language="jsx" style={atomOneDark}> */}
                    {`<${name} />`}
                {/* </Prism.SyntaxHighlighter> */}
            </div>
        </div>
    );
};

class App extends React.Component {
    render() {
        const codeString = `npm install --save react-spinners-kit`;
        const spinners = [CombSpinner].sort(() => Math.random() - 0.5);
        return (
            <div className="outer">
                <div className="header">
                    <h1 className="header-title">react-spinners-kit</h1>
                    <div className="header-subtitle">
                        A collection of loading spinners built with styled-components.
                    </div>
                </div>
                <a
                    href="https://github.com/dmitrymorozoff/react-spinners-kit"
                    className="button"
                    target="_blank"
                >
                    github
                </a>
                <div className="container">
                    <SpinnerWrapper name="BallSpinner">
                        <BallSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="SwapSpinner">
                        <SwapSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="BarsSpinner">
                        <BarsSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="ClapSpinner">
                        <ClapSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="GridSpinner">
                        <GridSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="WaveSpinner">
                        <WaveSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="PushSpinner">
                        <PushSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="FireworkSpinner">
                        <FireworkSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="StageSpinner">
                        <StageSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="RingSpinner">
                        <RingSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="HeartSpinner">
                        <HeartSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="GuardSpinner">
                        <GuardSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="CircleSpinner">
                        <CircleSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="RotateSpinner">
                        <RotateSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="SpiralSpinner">
                        <SpiralSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="PulseSpinner">
                        <PulseSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="SwishSpinner">
                        <SwishSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="SequenceSpinner">
                        <SequenceSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="ImpulseSpinner">
                        <ImpulseSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="CubeSpinner">
                        <CubeSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="MagicSpinner">
                        <MagicSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="FlagSpinner">
                        <FlagSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="FillSpinner">
                        <FillSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="SphereSpinner">
                        <SphereSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="DominoSpinner">
                        <DominoSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="GooSpinner">
                        <GooSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="CombSpinner">
                        <CombSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="PongSpinner">
                        <PongSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="RainbowSpinner">
                        <RainbowSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="HoopSpinner">
                        <HoopSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="FlapperSpinner">
                        <FlapperSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="JellyfishSpinner">
                        <JellyfishSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="TraceSpinner">
                        <TraceSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="ClassicSpinner">
                        <ClassicSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="WhisperSpinner">
                        <WhisperSpinner />
                    </SpinnerWrapper>
                    <SpinnerWrapper name="MetroSpinner">
                        <MetroSpinner />
                    </SpinnerWrapper>
                </div>
            </div>
        );
    }
}

// eslint-disable-next-line
ReactDOM.render(<App />, document.getElementById("root"));
