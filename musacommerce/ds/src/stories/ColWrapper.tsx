import {
  Col, Row
} from './../components/grid';

interface ColWrapperProps {
  cols?: number;
  offset?: number;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

function ColWrapper({ cols, offset, children, style }: ColWrapperProps) {
  console.log('ColWrapper props:', { cols, offset, style });
  return <Row>
    <Col cols={cols} offset={offset} style={style}>
      {children}
    </Col>
  </Row>
}

export { ColWrapper };
