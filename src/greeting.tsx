declare let mountNode: any

type NamePropsRequired = {
  firstName: string,
  lastName: string,
}

type NamePropsOptional = {
  middleName: string,
}

type NameProps = NamePropsRequired & NamePropsOptional;

class Greeting extends React.Component<NamePropsRequired & Partial<NamePropsOptional>, any> {
  static defaultProps: NamePropsOptional = {
    middleName: '(no middle name)'
  }
  constructor(props: NameProps) {
    super(props);
  }

  componentWillReceiveProps(props: NameProps) {

  }

  render() {
    const { firstName, lastName, middleName } = this.props;

    return <div>Hello, {`${firstName} ${middleName} ${lastName}`}</div>
  }
}

ReactDOM.render(<div>
  <Greeting firstName="John" lastName="Smith" /><br />
  <Greeting firstName="John" middleName="Jacob" lastName="Smith" /><br />
 </div>
  , mountNode)
