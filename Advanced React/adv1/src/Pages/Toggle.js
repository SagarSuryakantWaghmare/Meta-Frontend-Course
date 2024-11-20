import React from 'react';
import { useTheme } from "./ThemeContext";
import Switch from "./Switch";

const Title = ({ children }) => {
    const { theme } = useTheme();
    return (
        <h2 style={{ color: theme === "light" ? "black" : "white" }}>
            {children}
        </h2>
    );
};

const Paragraph = ({ children }) => {
    const { theme } = useTheme();
    return (
        <p style={{ color: theme === "light" ? "black" : "white" }}>
            {children}
        </p>
    );
};

const Content = () => {
    return (
        <div>
            <Paragraph>
                As computer science students, you're bound to face challenges, whether it's debugging code, understanding complex algorithms, or staying up late to meet deadlines. But remember, the journey of learning to code mirrors life itself — full of trial and error. Every error you encounter, every bug that frustrates you, is a stepping stone to mastery. "Never Give Up" isn’t just a phrase; it’s a mindset. Break problems into smaller pieces, seek help when needed, and keep pushing forward. Each small victory builds resilience, and over time, you'll realize that persistence is the key to conquering any obstacle, whether in coding or life. Keep going — your breakthrough is closer than you think!
            </Paragraph>
        </div>
    );
};

const Header = () => {
    return (
        <header>
            <Title>Sagar Waghmare</Title>
            <Switch />
        </header>
    );
};

const Page = () => {
    return (
        <div className='Page'>
            <Title>Never Give up!</Title>
            <Content />
        </div>
    );
};

function Toggle() {
    const { theme } = useTheme();
    return (
        <>
            <div className='Toggle' style={{ backgroundColor: theme === "light" ? "white" : "black" }}>
                <Header />
                <Page />
            </div>
        </>
    );
}

export default Toggle;