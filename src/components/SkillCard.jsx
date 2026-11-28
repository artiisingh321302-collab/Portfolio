import {
  AppWindow,
  Atom,
  Bot,
  Boxes,
  Braces,
  Code2,
  Coffee,
  Database,
  FileCode2,
  GitBranch,
  Hash,
  Layers,
  LockKeyhole,
  Monitor,
  Network,
  Palette,
  Send,
  Server,
  Table2,
  Terminal,
  TestTube2,
  Workflow,
} from 'lucide-react'
import { GithubIcon } from './BrandIcons.jsx'

const SKILL_ICONS = {
  html: FileCode2,
  css: Palette,
  javascript: Braces,
  react: Atom,
  csharp: Hash,
  python: Terminal,
  java: Coffee,
  dotnet: Server,
  mvc: Layers,
  api: Network,
  efcore: Boxes,
  wpf: Monitor,
  xaml: AppWindow,
  postgres: Database,
  sqlserver: Database,
  sql: Table2,
  visualstudio: AppWindow,
  vscode: Code2,
  git: GitBranch,
  github: GithubIcon,
  postman: Send,
  selenium: TestTube2,
  playwright: Bot,
  oop: Boxes,
  mvcconcept: Layers,
  crud: Table2,
  auth: LockKeyhole,
  integration: Workflow,
}

export default function SkillCard({ skill }) {
  const Icon = SKILL_ICONS[skill.icon] || Code2

  return (
    <li className="skill-card">
      <span className="skill-icon" aria-hidden="true">
        <Icon size={17} />
      </span>
      <span>{skill.name}</span>
    </li>
  )
}
