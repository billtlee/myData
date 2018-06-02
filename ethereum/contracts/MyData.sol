pragma solidity ^0.4.24; 


contract MyDataFactory {

    address[] public registeredAccounts;
    mapping(address => address) public mydataAccountMap;
    
    function createAccount(bytes32 publicDataKey, bytes32 privateDataKey, uint minimumPayment) public {
        address newAccount = new MyData(publicDataKey, privateDataKey, minimumPayment, msg.sender);
        registeredAccounts.push(newAccount);
        mydataAccountMap[msg.sender] = newAccount;
    }
    
    function getRegisteredAccounts() public view returns (address[]) {
        return registeredAccounts;
    }

    function getMyDataAddress(address owner) public view returns (address) {
        return mydataAccountMap[owner];
    }
}


contract MyData {

    uint public minimumPayment;
    address public owner;
    bytes32 public publicDataKey;
    bytes32 private privateDataKey;
    mapping(address => bool) public approvedAccessors;

    modifier restricted() {
        require(msg.sender == owner);
        _;
    } 
    
    constructor (bytes32 _publicDataKey, bytes32 _privateDataKey, uint _minimumPayment, address _owner) public {
        owner = _owner;
        publicDataKey = _publicDataKey;
        privateDataKey = _privateDataKey;
        minimumPayment = _minimumPayment;
        approvedAccessors[owner] = true;
    }

    function setMinimumPayment(uint _minimumPayment) public restricted {
        minimumPayment = _minimumPayment;    
    }
    
    function getAccess() public payable {
        require(msg.value >= minimumPayment);
        approvedAccessors[msg.sender] = true;
    }
    
    function isApprovedAccessor(address accessor) public view returns (bool) {
        return (approvedAccessors[accessor]);
    }

    function getPrivateData() public returns (bytes32) {
        if (approvedAccessors[msg.sender] == true) {
            if (msg.sender != owner) {
                approvedAccessors[msg.sender] = false;
            }
            return (privateDataKey);
        } else {
            return ("unauthorized");
        }
    }
}