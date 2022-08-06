import AWSIcon from "./icons/AWSIcon";
import GQLIcon from "./icons/GQLIcon";
import NodeIcon from "./icons/NodeIcon";
import ReactIcon from "./icons/ReactIcon";
import RNIcon from "./icons/RNIcon";
import TSIcon from "./icons/TSIcon";
import { ISkill } from "./types";

export const APP_NAME = 'TAWAN';

export const APP_TITLE = "Hi, It's Tew Tawan."

export const APP_SUBTITLE = "I'm a full-stack, frontend engineer. I'm working in digital transformation industry, and building micro startup and SaaS as side hustles.";

export const SKILLS: ISkill[] = [
  {
    name: 'TypeScript',
    description: 'Writing Type-Safe(ish) apps',
    iconComponent: TSIcon,
    iconSize: 14,
  },
  {
    name: 'React',
    description: 'Reusable & Testable UIs',
    iconComponent: ReactIcon,
    iconSize: 14,
  },
  {
    name: 'Node',
    description: 'MicroServices and API-First',
    iconComponent: NodeIcon,
    iconSize: 14,
  },
  {
    name: 'AWS',
    description: 'Dockerization & Containerization',
    iconComponent: AWSIcon,
    iconSize: 16,
  },
  {
    name: 'GraphQL',
    description: 'Apollo & Prisma',
    iconComponent: GQLIcon,
    iconSize: 14,
  },
  {
    name: 'ReactNative',
    description: 'Cross-platform Mobile Apps',
    iconComponent: RNIcon,
    iconSize: 14,
  },
]
