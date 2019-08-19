All artifacts under this directory are stateful components, where the state is declared and managed by "setState({...state})" method.
These components should be declared as "es6 based classes".

On such class-based components, where can declare methods which allow us manages the lifecycle of these components;
    [Component Creation]
        constructor(props)
            the very first method to be invoked (it is implicitly implemented in case it is not declared), if delcared explicitly it is mandatory invoke on the very first line "super(props)"
            DO: set up state
            DON'T: cause side-effect (don't make http requests or sync operations which causes performance impact)

        static getDerivedStateFromProps(props, state)
            (since react 16.3) whenever props changes for the class based component, you can sync your state to them
            it is rarely used
            DO: sync state
            DON'T: cause side-effect (don't make http requests or sync operations which causes performance impact)

        render()
            prepare and structure the JSX Code
            DON'T: cause side-effect (don't make http requests or sync operations which causes performance impact)

        *after the above methods (very after render()) for this "Component Creation lifecycle" is executed for the current component, then render() method will be executed for the "child components", and when their lifecycle is finished, for their creation, the current component "creation lifecycle" still bellow*

        componentDidMount()
            DO: it is a place where we can "cause side-effect", for example, make http requests
            DON'T: update state (would trigger re-render)

    [Component Update] When props or state changes
        static getDerivedStateFromProps(props, state)
            it is rarely used
            DO: sync state
            DON'T: cause side-effect (don't make http requests or sync operations which causes performance impact)

        shouldComponentUpdate(nextProps, nextState)
            (to be used cafefully) may cancel updating process
            if used properly, can improve performance lifecycle, telling when the re-render for "this" component or "children" must be invoked or not
            DO: Decide whether to continue to update (based on props or state)
            DON'T: cause side-effect (don't make http requests or sync operations which causes performance impact)

        render()
            prepare and structure the JSX Code
            DON'T: cause side-effect (don't make http requests or sync operations which causes performance impact)

        *after the above methods (very after render()) for this "Component Update lifecycle" is executed for the current component, then render() method will be executed for the "child components", and when their lifecycle is finished, for their creation, the current component "component update lifecycle" still bellow*

        getSnapshotBeforeUpdate(prevProps, prevState)
            it is rarely used
            DO: last-minute DOM operations
            DON'T: cause side-effect (don't make http requests or sync operations which causes performance impact)
            used e.g; getting the current scrolling postion of the user, where it is returned an object which can be retrieved on "componentDidUpdate()"

        componentDidUpdate(prevProps, prevState, snapshot)
            DO: it is a place where we can "cause side-effect", for example, make http requests
            DON'T: update state (would trigger re-render)

    componentDidCatch()
    componentWillUnmount()