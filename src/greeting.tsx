declare let mountNode: any

type GreetingRequiredProps = {
  firstName: string;
  lastName: string;
}

type GreetingDefaultProps = {
  middleName: string;
}

type GreetingPropsWithDefaults = GreetingRequiredProps & GreetingDefaultProps;

const Greeting: React.ComponentClass<GreetingRequiredProps & Partial<GreetingDefaultProps>> =
  class extends React.Component<GreetingPropsWithDefaults> {

  static defaultProps: GreetingDefaultProps = {
    middleName: "(no middle name)"
  }

  constructor(props: GreetingPropsWithDefaults) {
    super(props)
  }

  render() {
    const { firstName, lastName, middleName } = this.props;

    log(middleName);
    log(`is not optional internally`);

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

