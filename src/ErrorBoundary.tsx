import * as React from "react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

type State = {
  hasError: boolean;
};

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: unknown) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h3>Oops.</h3>;
    }

    return this.props.children;
  }
}
