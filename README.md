# react-plugin

# Interface in JS?

Figure out if interface/type can be used in JS projects. If not, how do we enforce mandatory props and how do we convey to developers which props are optional?

## Interfaces and Types in JavaScript Projects

In JavaScript, the concepts of interfaces and types are not natively available like they are in statically typed languages such as TypeScript. However, JavaScript does provide alternatives and patterns to achieve similar functionality.

### Enforcing Mandatory Props

To enforce mandatory props in JavaScript projects, we can follow these approaches:

1. **Documentation**: Clearly document the required props for each component or module.

2. **Runtime Checks**: Implement runtime checks within the component or module code to verify the presence of mandatory props.

3. **Default Values**: Set default values for props that are not provided.

## Interfaces and Types in JavaScript Projects

In JavaScript, the concepts of interfaces and types are not natively available like they are in statically typed languages such as TypeScript. However, JavaScript does provide alternatives and patterns to achieve similar functionality.

## Single Transaction Bridge Flow using Socket:

1. User Interaction:
   - User selects the sending and destination chains.

2. Token Selection:
   - Based on the selected chains, identify the tokens that can be bridged.
   - Populate the "from-token-list" and "to-token-list" components with supported tokens for bridging.
   - User selects the token to be sent and received.

3. Route Selection:
   - Fetch available routes between the selected chains using the quote endpoint.
   - Display the available routes to the user.
   - User selects a desired route for the transaction.

4. ERC-20 Token Check:
   - Check if the selected token is an ERC-20 token.
   - If it is not an ERC-20 token, skip to step 8.

5. Allowance Check:
   - Request allowance for spending the sending token from the user using the check-allowance endpoint.
   - This step ensures that the Socket contract can transfer the token on behalf of the user.

6. Transaction Data Retrieval:
   - Fetch the callData for the selected route from the /server/build-tx endpoint.
   - The callData contains the necessary transaction details and instructions for the bridge.

7. Contract Call and Bridge:
   - Initiate a contract call to send the callData to the Socket contracts.
   - The Socket contract bridges and swaps the tokens based on the provided instructions.

8. Transaction Status Tracking:
   - Track the status of the transaction using Socket Bridge Status APIs.
   - This allows you to monitor the progress and completion of the bridge transaction.