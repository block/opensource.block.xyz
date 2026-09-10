import type { ExternalLink } from '@/components/block/ExternalLinksSection.astro';

export const keyContributions: ExternalLink[] = [
  {
    name: "Goose",
    href: "https://block.github.io/goose/",
    description: "Goose, originally developed by Block and donated to the Agentic AI Foundation (AAIF), is your on-machine developer agent, working for you, on your terms. Guided by you, Goose intelligently assesses what you need and generates required code or modifications. You are in charge: Do you prefer Goose to make a draft, or complete the change entirely? Do you prefer to work in a terminal or in your IDE? Doing our work requires a lot of tools like Jira, GitHub, and Slack, as well APIs for infrastructure and data pipelines. Goose handles all of these, and is extensible. Goose can run anything invocable by a shell command, Python or a plugin. Like semi-autonomous driving, Goose handles the heavy lifting, allowing you to focus on other priorities. Simply set it on a task and return later to find it completed, boosting your productivity with less manual effort.",
  },
  {
    name: "Retrofit",
    href: "https://square.github.io/retrofit/",
    description: "Originally developed by Block, Retrofit is a type-safe HTTP client for Java and Android that simplifies API integration by turning RESTful APIs into easy-to-use Java interfaces. It handles all the complexities of network calls, including URL creation, request execution, and response parsing, enabling developers to focus on building features. Designed for flexibility and ease of use, Retrofit supports synchronous and asynchronous requests, ensuring compatibility with various application architectures. It also allows customization through annotations for headers, query parameters, and request bodies.",
  },
  {
    name: "LDK",
    href: "https://lightningdevkit.org/",
    description: "The Lightning Development Kit (LDK) is a flexible, modular library designed to help developers integrate Lightning Network functionality into their applications with ease. It provides core Lightning Network capabilities such as channel management, routing, and transaction signing while giving developers full control over their application's design and features. Built for scalability and security, LDK is written in Rust, offering strong safety guarantees and performance. Its modular architecture allows developers to pick and choose the components they need, enabling seamless integration into existing systems.",
  },
  {
    name: "Triton",
    href: "https://github.com/triton-inference-server/server",
    description: "Block has actively contributed to Triton, an open source deep learning compiler that optimizes AI models for efficient deployment. Our work has focused on improving performance for financial and payment-related machine learning applications, ensuring that AI-driven innovations remain accessible and performant at scale.",
  },
  {
    name: "MySQL",
    href: "https://github.com/mysql",
    description: "Our contributions to MySQL have focused on performance improvements and scalability enhancements, particularly in areas related to high-throughput financial transactions. Given the central role MySQL plays in powering Block's payment and financial services, our work helps strengthen this database's reliability and efficiency for businesses worldwide.",
  },
  {
    name: "Model Context Protocol",
    href: "https://modelcontextprotocol.io/introduction",
    description: "The Model Context Protocol (MCP) is an open source protocol built by Anthropic with close collaboration with Block for giving large language models (LLMs) a standard way to access tools and data. MCP has gained wide adoption and industry acceptance, used by proprietary and open source agentic frameworks alike. In addition to being design partners with Anthropic, Block contributed the Rust implementation, and leverages MCP as the foundation for building extensions for codename goose, Block's open source agentic framework.",
  },
  {
    name: "gRPC",
    href: "https://github.com/grpc",
    description: "gRPC, co-created by Block, has become the de-facto standard for high-performance remote procedure calls, enabling efficient, low-latency communication across distributed systems. Our work has been instrumental in shaping its architecture, ensuring it meets the needs of modern cloud applications and microservices. gRPC's widespread adoption across the industry underscores its role in driving scalable, interoperable, and performant service-to-service communication.",
  },
  {
    name: "OkHttp",
    href: "https://github.com/square/okhttp/",
    description: "Originally created by Square, OkHttp has become a cornerstone of Android networking, providing efficient and secure HTTP communication. Our continued contributions have improved connection pooling, security, and HTTP/2 support, making it a crucial tool for mobile and backend developers worldwide.",
  },
  {
    name: "Envoy",
    href: "https://github.com/envoyproxy",
    description: "Envoy is a high-performance service proxy that Block has contributed to, enhancing its observability, security, and scalability features. Our engineers have worked on improving its integration with cloud-native infrastructure and optimizing performance for high-throughput financial applications. Envoy's role in distributed systems makes it a key enabler of resilient and efficient microservices architectures.",
  },
];