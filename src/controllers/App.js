import React from "react";
import "./App.scss";

import { TextBlock, Page as BasePage, H1, H2, Scrollbar } from "@ractf/ui-kit";
import Routes from "controllers/Routes";


class ErrorBoundary extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { error: null };
    }

    static getDerivedStateFromError(error) {
        return { error: error };
    }

    componentDidCatch(error, errorInfo) {
        //
    }

    render() {
        if (this.state.error) {
            return <BasePage centre>
                <H1>This page failed to load.</H1>
                <H2>Please report this!</H2>
                <TextBlock style={{ textAlign: "left" }}>{this.state.error.stack}</TextBlock>
            </BasePage>;
        }

        return this.props.children;
    }
}


const App = () => {
    return (
        <ErrorBoundary>
            <Scrollbar primary>
                <Routes />
            </Scrollbar>
        </ErrorBoundary>
    );
};

export default App;
