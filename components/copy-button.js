import React, { Component } from 'react';
import ListItem from 'react-md/lib/Lists/ListItem';
import CopyToClipboard from 'react-copy-to-clipboard';
import TooltipFontIcon from './tooltip-icon';

class CopyButton extends Component {
    constructor(props) {
        super(props);

        this.toolTipDefault = 'Copy Link to Clipbaord';

        this.state = {
            tooltipText: this.toolTipDefault
        };

        this.copyCb = this.copyCb.bind(this);
        this.renderCopyIcon = this.renderCopyIcon.bind(this);
    }

    renderCopyIcon() {
        return (
            <TooltipFontIcon
                tooltipLabel={this.state.tooltipText}
                tooltipPosition='right'
            >
                content_copy
            </TooltipFontIcon>
        );
    }

    copyCb(text, result) {
        this.setState({
            tooltipText: 'Copied!'
        });

        setTimeout(() => this.setState({
            tooltipText: this.toolTipDefault
        }), 500);
    }

    render() {
        const { text } = this.props;

        return (
            <CopyToClipboard
                text={text}
                onCopy={this.copyCb}
            >
                <ListItem
                    primaryText={this.renderCopyIcon()}
                >
                </ListItem>
            </CopyToClipboard>
        )
    }
}

export default CopyButton;
