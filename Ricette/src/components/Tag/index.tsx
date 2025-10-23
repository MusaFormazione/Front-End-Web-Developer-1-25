interface PropsTag {
  text: string
}

interface PropsTagList {
  tags: string[]
}

import "./style.scss"

export function Tag({ text }: PropsTag) {
  return <span className="tag">{text}</span>
}

export function TagList({ tags }: PropsTagList) {
  return <div className="tag-list">
    {tags.map((tag, index) => (
      <Tag key={index} text={tag} />
    ))}
  </div>
}

