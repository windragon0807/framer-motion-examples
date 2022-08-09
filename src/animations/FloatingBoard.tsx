import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const overlay = {
    hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
    visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
    exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};

const FloatingBoard = () => {
    const [id, setId] = useState<null | string>(null);

    return (
        <Wrapper>
            <Grid>
                {/* 📌 layoutId는 string이어야 하기 때문에 배열 요소를 string으로 설정 */}
                {["1", "2", "3", "4"].map((n) => (
                    <Box onClick={() => setId(n)} key={n} layoutId={n} />
                    // 📌 onClick의 setId 앞에 () => 를 제외시키면 즉시 실행되기 때문에 반드시 붙여줘야 한다.
                ))}
            </Grid>
            <AnimatePresence>
                {id ? (
                    <Overlay
                        variants={overlay}
                        onClick={() => setId(null)} // Id를 null로 설정하여 Overlay를 포함한 Box를 null 처리
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <Box layoutId={id} style={{ width: 400, height: 200 }} />
                        {/* 📌 안쪽 Box와 바깥쪽 Box는 따로 설정해둔 다른 Component지만
                                layoutId를 같도록 설정하여 같은 Component처럼 인식하고 애니메이션한다. */}
                    </Overlay>
                ) : null}
            </AnimatePresence>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: linear-gradient(180deg, #05f, #09f);
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    width: 50vw;
    gap: 10px;
    div:first-child,
    div:last-child {
        grid-column: span 2;
    }
`;

const Box = styled(motion.div)`
    background-color: rgba(255, 255, 255, 1);
    border-radius: 40px;
    height: 200px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const Overlay = styled(motion.div)`
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default FloatingBoard;
