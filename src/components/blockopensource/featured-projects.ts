import type { Project } from "./FeaturedProjects.astro";

export const featuredProjects: Project[] = [
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
];
