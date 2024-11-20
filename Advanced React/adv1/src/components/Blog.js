import React from "react";
import { UserProvider, useUser } from "./UserContext";

const LoggedInUser = () => {
    const { user } = useUser();
    return (
        <p>
            Hello, <span className="UserName">{user.name}</span>!
        </p>
    );
};

const Header = () => {
    return (
        <header style={{ padding: "10px", backgroundColor: "#f3f3f3", textAlign: "center" }}>
            <h2>Blog App</h2>
            <LoggedInUser />
        </header>
    );
};

function Blog() {
    return (
        <div style={{ fontFamily: "Arial, sans-serif", lineHeight: "1.6", margin: "20px" }}>
            <Header />
            <main>
                <h2>Sagar can do it.</h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, animi quam tempora
                    unde ullam suscipit. Nostrum qui nam pariatur temporibus iure hic recusandae corrupti ex
                    veniam ea doloribus animi architecto ullam, quis dicta modi, eaque nobis assumenda.
                    Ratione, minus dolores! Vel eveniet voluptatem doloribus delectus minima natus adipisci,
                    iusto sit magnam deserunt debitis, aspernatur repellendus illum perferendis. Omnis dolor
                    molestias suscipit delectus eum voluptatum commodi magni, incidunt mollitia tenetur
                    beatae minus repellat possimus asperiores et provident est fugit nam. Maxime doloremque
                    numquam, consectetur, doloribus, pariatur dolorem qui quo velit facilis obcaecati earum
                    sit est alias enim nisi ab reiciendis expedita!
                </p>
                <p>Written By: Sagar</p>
            </main>
        </div>
    );
}

export default Blog;
