import AWSIcon from "./icons/AWSIcon";
import GQLIcon from "./icons/GQLIcon";
import NodeIcon from "./icons/NodeIcon";
import ReactIcon from "./icons/ReactIcon";
import RNIcon from "./icons/RNIcon";
import TSIcon from "./icons/TSIcon";
import { ISkill } from "./types";

export const APP_NAME = 'TAWAN';

export const APP_TITLE = 'Just another Fullstack Engineer';

export const APP_SUBTITLE = 'Everything you’ve ever wanted to know about me and more.';

export const SKILLS: ISkill[] = [
  {
    name: 'TypeScript',
    description: 'Writing Type-Safe(ish) JS Code',
    iconComponent: TSIcon,
    iconSize: 14,
  },
  {
    name: 'React',
    description: 'Reusable and Testable UIs',
    iconComponent: ReactIcon,
    iconSize: 14,
  },
  {
    name: 'Node',
    description: 'Microservices and APIs',
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
    description: 'Apollo, Prisma & Hasura',
    iconComponent: GQLIcon,
    iconSize: 14,
  },
  {
    name: 'ReactNative',
    description: 'Develop mobile apps',
    iconComponent: RNIcon,
    iconSize: 14,
  },
]
