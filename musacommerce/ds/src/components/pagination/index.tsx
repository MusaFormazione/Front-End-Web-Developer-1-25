import type { ReactNode } from "react"
import "./style.scss"

interface PaginationProps {
  links: React.ReactNode[]
  selected: number
}


function Pagination({links, selected}: PaginationProps) {
  if (links.length < 4) {
    return <div className="mds-pagination">
    {
      links.map( (l, i) =>
        <Page key={`link-${i}`} selected={i === selected}>{l}</Page>)
    }
    </div>
  } else if (selected <= 0 ) {
    return <div className="mds-pagination">
      <Page key={`link-0`} selected={true} >{links[0]}</Page>
      <Page key={`link-1`}>{links[1]}</Page>
      <Page key={`link-2`}>{links[2]}</Page>
      <PageDot />
      <Page key={`link-${[links.length-1]}`} >{links[links.length-1]}</Page>
    </div>
  } else if (selected > links.length - 3 && selected < links.length ) {
    return  <div className="mds-pagination">
        <Page key={`link-0`}>{links[0]}</Page>
        <PageDot />
        <Page key={`link-1`} selected={selected === links.length-3}>{links[links.length-3]}</Page>
        <Page key={`link-2`} selected={selected === links.length-2}>{links[links.length-2]}</Page>
        <Page key={`link-${[links.length-1]}`} selected={selected === links.length-1}>{links[links.length-1]}</Page>
    </div>

  } else if ( selected >= links.length-1 ) {
    return <div className="mds-pagination">
      <Page key={`link-0`}>{links[0]}</Page>
      <PageDot />
      <Page key={`link-1`}>{links[links.length-3]}</Page>
      <Page key={`link-2`}>{links[links.length-2]}</Page>
      <Page key={`link-2`} selected={true}>{links[links.length-1]}</Page>
    </div>
  }
  return <div className="mds-pagination">
      <Page key={`link-0`}>{links[selected-1]}</Page>
      <Page key={`link-1`} selected={true}>{links[selected]}</Page>
      <Page key={`link-2`}>{links[selected+1]}</Page>
      <PageDot />
      <Page key={`link-${[links.length-1]}`} >{links[links.length-1]}</Page>
  </div>


}

interface PageProps {
  selected?: boolean
  children: ReactNode
}

function Page({selected = false, children}: PageProps) {
  return <div className={`mds-page ${selected && 'mds-page-selected'}`}>
    {children}
  </div>
}

function PageDot() {
  return <div className={'mds-page'}>
    ...
  </div>
}

export { Pagination }
