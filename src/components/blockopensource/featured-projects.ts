import type { Project } from "./FeaturedProjects.astro";

export const featuredProjects: Project[] = [
  {
    name: "Goose",
    href: "https://block.github.io/goose/",
    iconName: "block-open-source/goose",
    starsAndForks: "block/goose",
    paragraphs: [
      "Goose is your on-machine developer agent, working for you, on your terms. Guided by you, Goose intelligently assesses what you need and generates required code or modifications. You are in charge: Do you prefer Goose to make a draft, or complete the change entirely? Do you prefer to work in a terminal or in your IDE?",
      "Doing our work requires a lot of tools like Jira, GitHub, and Slack, as well APIs for infrastructure and data pipelines. Goose handles all of these, and is extensible. Goose can run anything invocable by a shell command, Python or a plugin.",
      "Like semi-autonomous driving, Goose handles the heavy lifting, allowing you to focus on other priorities. Simply set it on a task and return later to find it completed, boosting your productivity with less manual effort."
    ],
  },
  {
    name: "Berd",
    href: "https://berd.xyz/",
    iconName: "block-open-source/berd",
    starsAndForks: "block/berd",
    paragraphs: [
      "Berd is an open source desktop app for getting work done with AI agents, using any model. Built on the goose framework and connected through the Agent Client Protocol, Berd brings conversations, files, projects, agents, and skills together in one consistent environment. Instead of rebuilding context for every task, you shape agents around the way you work and pick up right where you left off.",
      "Berd is also an exploration of a design question: how do you make something as abstract as an AI agent easier to understand and shape? Our answer was character. In Berd, agents have distinct visual identities, including our flagship collection of animated \"Gloopies,\" that make each agent's role, skills, and tools recognizable at a glance. Just by chatting, anyone can create custom agents for any task, from writing in your style to planning travel. It's AI that's visible, approachable, and personal, not just powerful.",
      "Whether you're shipping code, doing research, or automating the busywork, Berd makes working alongside agents feel like a natural part of your day."
    ],
  },
  {
    name: "Buzz",
    href: "https://buzz.xyz/",
    iconName: "block-open-source/buzz",
    starsAndForks: "block/buzz",
    paragraphs: [
      "Buzz is a self-hostable workspace where humans and AI agents build together, side by side. Agents aren't bolted on as bots. They're first-class teammates with their own identities, channel memberships, and audit trails. They can open repos, send patches, review code, run workflows, edit canvases, and join huddles, with the same affordances as a human collaborator.",
      "Under the hood, Buzz is built on the open Nostr protocol: every message, reaction, workflow step, review approval, and git event is a signed event in one unified log. That means one searchable record of the conversation, the patch, the CI run, and the decision, plus a relay you own, so your team's history stays yours.",
      "If you've wondered what team collaboration looks like when agents do real work, Buzz is the answer."
    ],
  },
  {
    name: "OkHttp",
    href: "https://square.github.io/okhttp/",
    iconName: "block-open-source/okhttp",
    starsAndForks: "square/okhttp",
    paragraphs: [
      "OkHttp is a modern HTTP client designed for efficiency and reliability, ensuring faster load times and reduced bandwidth usage. It supports HTTP/2 to allow multiple requests to share a single connection, uses connection pooling to reduce latency, and leverages features like transparent GZIP compression to shrink downloads and response caching to eliminate redundant network requests.",
      "Built with developers in mind, OkHttp offers an easy-to-use request/response API with fluent builders and immutability. It supports both synchronous and asynchronous calls, providing flexibility for different use cases. OkHttp is also the default HTTP client for Android, and is popular in both client and server side development."
    ],
  },
  {
    name: "Retrofit",
    href: "https://square.github.io/retrofit/",
    iconName: "block-open-source/retrofit",
    starsAndForks: "square/retrofit",
    paragraphs: [
      "Retrofit is a type-safe HTTP client for Java and Android that simplifies API integration by turning RESTful APIs into easy-to-use Java interfaces. It handles all the complexities of network calls, including URL creation, request execution, and response parsing, enabling developers to focus on building features.",
      "Designed for flexibility and ease of use, Retrofit supports synchronous and asynchronous requests, ensuring compatibility with various application architectures. It also allows customization through annotations for headers, query parameters, and request bodies."
    ],
  },
  {
    name: "LDK",
    href: "https://lightningdevkit.org/",
    iconName: "block-open-source/ldk",
    followers: "lightningdevkit",
    paragraphs: [
      "The Lightning Development Kit (LDK) is a flexible, modular library designed to help developers integrate Lightning Network functionality into their applications with ease. It provides core Lightning Network capabilities such as channel management, routing, and transaction signing while giving developers full control over their application's design and features.",
      "Built for scalability and security, LDK is written in Rust, offering strong safety guarantees and performance. Its modular architecture allows developers to pick and choose the components they need, enabling seamless integration into existing systems."
    ],
  }
];