declare let mountNode: any

interface NamePropsRequired {
  firstName: string;
  lastName: string;
}

interface NamePropsOptional {
  middleName: string;
}

type NameProps = NamePropsRequired & NamePropsOptional;

const Greeting: React.ComponentClass<NamePropsRequired & Partial<NamePropsOptional>> =
  class extends React.Component<NameProps> {
  static defaultProps: NamePropsOptional = {
    middleName: "(no middle name)"
  }

  constructor(props: NameProps) {
    super(props)
  }

  render() {
    const { firstName, lastName, middleName } = this.props;
    log(`${this.props.middleName} is not optional internally`);

    return <div>Hello, {`${firstName} ${middleName} ${lastName}`}</div>
  }
}

function log(message: string) {
  console.log(message);
}

ReactDOM.render(<div>
  <Greeting firstName="John" lastName="Smith" /><br />
  <Greeting firstName="John" middleName="Jacob" lastName="Smith" /><br />
 </div>
  , mountNode)

