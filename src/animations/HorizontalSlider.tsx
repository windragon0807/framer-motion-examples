import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const box = {
    // 📌 custom 속성으로 전달받은 parameter를 함수로 처리
    entry: (isBack: boolean) => ({
        x: isBack ? -500 : 500,
        opacity: 0,
        scale: 0,
    }),
    center: {
        x: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
        },
    },
    exit: (isBack: boolean) => ({
        x: isBack ? 500 : -500,
        opacity: 0,
        scale: 0,
        transition: { duration: 0.5 },
    }),
};

const HorizontalSlider = () => {
    // 📌 AnimatePresence는 리액트에서 사라지는 component를 animate하도록 설정한다.
    const [num, setNum] = useState(1);
    const [isBack, setIsBack] = useState(false);
    const nextPlease = () => {
        setIsBack(false);
        setNum((prev) => (prev === 10 ? 10 : prev + 1));
    };
    const prevPlease = () => {
        setIsBack(true);
        setNum((prev) => (prev === 1 ? 1 : prev - 1));
    };

    return (
        <Wrapper>
            {/* 📌 AnimatePresence는 항상 visible 상태여야 한다. */}
            {/* 📌 AnimatePresence의 exitBeforeEnter 속성은 exit이 완전히 끝난 후 initail 애니메이션을 실행한다. */}
            <AnimatePresence custom={isBack}>
                <Box
                    custom={isBack} // 📌 variants에 parameter를 넘겨줄 수 있다.
                    variants={box}
                    initial="entry"
                    animate="center"
                    exit="exit" // 사라질 때의 애니메이션 설정
                    key={num}
                >
                    {/* 📌 AnimationPresence는 컴포넌트가 사라졌다고만 판단하면 exit animation을 실행한다. */}
                    {num}
                </Box>
            </AnimatePresence>
            <button onClick={nextPlease}>next</button>
            <button onClick={prevPlease}>prev</button>
        </Wrapper>
    );
};

const Wrapper = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(180deg, #05f, #09f);
    flex-direction: column;
`;

const Box = styled(motion.div)`
    width: 400px;
    height: 200px;
    background-color: rgba(255, 255, 255, 1);
    border-radius: 40px;
    position: absolute;
    top: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

export default HorizontalSlider;
