"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
// /register
var RegisterComponent = /** @class */ (function (_super) {
    __extends(RegisterComponent, _super);
    function RegisterComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RegisterComponent.prototype.handleChange = function (event) {
        this.setState({
            firstName: event.target.value
        });
    };
    RegisterComponent.prototype.render = function () {
        return (React.createElement(semantic_ui_react_1.Form, null,
            React.createElement(semantic_ui_react_1.Form.Field, null,
                React.createElement("label", null, "First Name"),
                React.createElement("input", { placeholder: 'First Name' })),
            React.createElement(semantic_ui_react_1.Form.Field, null,
                React.createElement("label", null, "Last Name"),
                React.createElement("input", { placeholder: 'Last Name' })),
            React.createElement(semantic_ui_react_1.Form.Field, null,
                React.createElement(semantic_ui_react_1.Checkbox, { label: 'I agree to the Terms and Conditions' })),
            React.createElement(semantic_ui_react_1.Button, { type: 'submit' }, "Submit")));
    };
    return RegisterComponent;
}(React.PureComponent));
;
exports.default = RegisterComponent;
//# sourceMappingURL=RegisterComponent.js.map