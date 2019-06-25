import React from 'react';
import Dialog from 'react-dialog';

class Dialogue extends React.Component {
    constructor() {
        super();
        this.state = {
            isDialogOpen: false
        }
    }
 
    openDialog = () => this.setState({ isDialogOpen: true })
 
    handleClose = () => this.setState({ isDialogOpen: false })
 
    render() {
        return (
            <div className="dialogueContainer">
                <button className={this.props.buttonClass} type="button" onClick={this.openDialog}>{this.props.buttonText}</button>
                {
                    this.state.isDialogOpen &&
                    <Dialog
                        modal={true}
                        height="150"
                        width="450"
                        hasCloseIcon={false}
                        onClose={this.handleClose}
                        buttons={
                            [{
                                text: "X",
                                onClick: () => this.handleClose()
                            }]
                        }>
                        <p className="dialogueMessageLine">{this.props.messageLine1}</p>
                        <p className="dialogueMessageLine">{this.props.messageLine2}</p>
                        <p className="dialogueMessageLine">{this.props.messageLine3}</p>
                        <p className="dialogueMessageLine">{this.props.messageLine4}</p>
                        <p className="dialogueMessageLine">{this.props.messageLine5}</p>
                        <p className="dialogueMessageLine">{this.props.messageLine6}</p>
                        <p className="dialogueMessageLine">{this.props.messageLine7}</p>
                        <p className="dialogueMessageLine">{this.props.messageLine8}</p>
                        <p className="dialogueMessageLine">{this.props.messageLine9}</p>
                        <p className="dialogueMessageLine">{this.props.messageLine10}</p>
                        <p className="dialogueMessageLine">{this.props.messageLine11}</p>
                        <p></p>
                        <a className="dialogueLink" href={this.props.link1}>{this.props.linkText1}</a>
                        <p></p>
                        <a className="dialogueLink" href={this.props.link2}>{this.props.linkText2}</a>
                        <p></p>
                    </Dialog>
                }
            </div>
        );
    }
}

module.exports = Dialogue;