import "./style.scss"

type WelcomeType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface WelcomeProps {
  message: string,
  type?: WelcomeType
}

const H1 = ({ message }: { message: string }) => <h1 className="p-3 m-2 welcome">{message}</h1>
const H2 = ({ message }: { message: string }) => <h2 className="p-3 m-2 welcome">{message}</h2>
const H3 = ({ message }: { message: string }) => <h3 className="p-3 m-2 welcome">{message}</h3>
const H4 = ({ message }: { message: string }) => <h4 className="p-3 m-2 welcome">{message}</h4>
const H5 = ({ message }: { message: string }) => <h5 className="p-3 m-2 welcome">{message}</h5>
const H6 = ({ message }: { message: string }) => <h6 className="p-3 m-2 welcome">{message}</h6>
const P = ({ message }: { message: string }) => <p className="p-3 m-2 welcome">{message}</p>

function Welcome({ message, type }: WelcomeProps) {
  switch (type) {
    case 'h1':
      return <H1 message={message} />
    case 'h2':
      return <H2 message={message} />
    case 'h3':
      return <H3 message={message} />
    case 'h4':
      return <H4 message={message} />
    case 'h5':
      return <H5 message={message} />
    case 'h6':
      return <H6 message={message} />
    default:
      return <P message={message} />
  }
}

export default Welcome
