// App.jsx

import React from "react"
import { Layout, Menu, Avatar, Card, Button } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";

import { Image } from 'antd';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Navbar */}
      <Header style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ color: "white", fontSize: "1.5rem", fontWeight: "bold" }}>
          My Portfolio
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          items={[
            { key: "1", label: "About" },
            { key: "2", label: "Projects" },
            { key: "3", label: "Contact" },
          ]}
        />
      </Header>

      {/* Content */}
      <Content style={{ padding: "2rem 3rem" }}>
        {/* Hero / About Section */}
        <div
          style={{
            textAlign: "center",
            padding: "3rem 1rem",
            background: "#f0f2f5",
            borderRadius: "12px",
          }}
        >
          <Avatar
            size={120}
            src="https://via.placeholder.com/150" // replace with your picture
          />
          <h1 style={{ marginTop: "1rem", fontSize: "2rem" }}>Hi, I'm Gulmi 👋</h1>
          <p style={{ maxWidth: "600px", margin: "0 auto", fontSize: "1.1rem" }}>
            I’m a web developer specializing in React, Node.js, and modern
            JavaScript frameworks. I enjoy building beautiful and scalable
            applications.
          </p>
        </div>

        {/* Projects Section */}
        <h2 style={{ margin: "2rem 0 1rem" }}>Projects</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <Card title="Poke-fight game" bordered>
         <div><p>A modern shopping app built with React and Node.js.</p></div> 
            <div> <Image
    width={250}
    src=".\src\assets\pokefight.png"
  /></div>
            <Button type="link" href="https://github.com/Gulmina/poke-fight-g1">
              GitHub →
            </Button>
          </Card>

          <Card title="JourneyPack " bordered>
            <p>JourneyPack is an innovative e-commerce platform that tailors shopping experiences based on travel plans. 
It collects user inputs such as destination, timing, activities, and preferred hotel type..</p>
            <div> <Image
    width={250}
    src=".\src\assets\logo.png"
  /></div>
            <Button type="link" href="https://github.com/juyaamir/group4">
              GitHub →
            </Button>
          </Card>
        </div>
      </Content>

      {/* Footer */}
      <Footer style={{ textAlign: "center" }}>
        <a
          href="mailto:gulmina44@gmail.com"
          style={{ margin: "0 10px", fontSize: "1.5rem" }}
        >
          <MailOutlined />
        </a>
        <a
          href="www.linkedin.com/in/gulmina-ayaz"
          style={{ margin: "0 10px", fontSize: "1.5rem" }}
        >
          <LinkedinOutlined />
        </a>
        <a
          href="https://github.com/Gulmina"
          style={{ margin: "0 10px", fontSize: "1.5rem" }}
        >
          <GithubOutlined />
        </a>
        <p style={{ marginTop: "10px" }}>
          © {new Date().getFullYear()} Gulmina Ayaz 
        </p>
      </Footer>
    </Layout>
  );
}

export default App;
