pragma solidity ^0.4.21; 

contract MyDataFactory {

    address[] public registeredAccounts;
    mapping(address => address) public mydataAccountMap;
    
    function createAccount(bytes32 firstName, bytes32 lastName, bytes32 mobile, bytes32 _email, 
        bytes32 _location, uint _minimumPayment) public {
        address newAccount = new MyData(firstName, lastName, mobile, _email, _location, _minimumPayment, msg.sender);
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

    event UpdateInterests(address _from, uint[] interestsToAdd, uint[] interestsToRemove);
    event GetPrivateData(address _from, bool isAccessor);
    struct PrivateData {
        bytes32 firstName;
        bytes32 lastName;
        bytes32 mobile;
        bytes32 email;
    }
    
    string[] private interestsConst = ["tennis", "golf", "shopping", 
        "movie", "hiking", "reading", "diving", "investing"];

    PrivateData private privateData;
    uint public minimumPayment;
    address public owner;
    bytes32 public location;
    mapping(bytes32 => bool) public interests;
    mapping(address => bool) public approvedAccessors;

    modifier restricted() {
        require(msg.sender == owner);
        _;
    } 
    
    function MyData(bytes32 firstName, bytes32 lastName, bytes32 mobile, bytes32 _email, 
        bytes32 _location, uint _minimumPayment, address _owner) public {
        owner = _owner;
        privateData.firstName = firstName;
        privateData.lastName = lastName;
        privateData.mobile = mobile;
        privateData.email = _email;
        location = _location;
        minimumPayment = _minimumPayment;
        approvedAccessors[owner] = true;
    }

    function setMinimumPayment(uint _minimumPayment) public restricted {
        minimumPayment = _minimumPayment;    
    }

    function setInterests(string _interest) public restricted {
        bytes32 key = keccak256(_toLower(_interest));
        interests[key] = true;
    }
    
    function updateInterests(uint[] interestsToAdd, uint[] interestsToRemove) public restricted {
        emit UpdateInterests(msg.sender, interestsToAdd, interestsToRemove);

        for (uint i = 0; i < interestsToAdd.length; i++) {
            bytes32 key =keccak256(interestsConst[interestsToAdd[i]]);
            interests[key] = true;
        }
        for (uint j = 0; i < interestsToRemove.length; j++) {
            bytes32 key2 = keccak256(interestsConst[interestsToRemove[j]]);
            interests[key2] = false;
        }
    }

    function hasInterest(string _interest) public view returns (bool) {
        bytes32 key = keccak256(_toLower(_interest));
        return interests[key];
    }
    
    function setLocation(bytes32 _location) public restricted {
        location = _location;
    }
    
    function getAccess() public payable {
        require(msg.value >= minimumPayment);
        approvedAccessors[msg.sender] = true;
    }
    
    function isApprovedAccessor(address accessor) public view returns (bool) {
        return (approvedAccessors[accessor]);
    }

    function getPrivateData() public returns (bytes32, bytes32, bytes32, bytes32) {
        emit GetPrivateData(msg.sender, approvedAccessors[msg.sender]);
//        require(approvedAccessors[msg.sender] == true);
        if (approvedAccessors[msg.sender] == true) {
            if (msg.sender != owner) {
                approvedAccessors[msg.sender] = false;
            }
            return (privateData.firstName, privateData.lastName, privateData.mobile, privateData.email);
        } else {
            return ("unauthorized", "unauthorized", "unauthorized", "unauthorized");
        }

        return ("something else", "something else", "something else", "something else");
    }

    function getPrivateFirstName() public view returns (bytes32) {
//        require(approvedAccessors[msg.sender] == true);
        return(privateData.firstName);
    }

    function getPrivateLastName() public view returns (bytes32) {
        require(approvedAccessors[msg.sender] == true);
        return(privateData.lastName);
    }

    function getPrivateMobile() public view returns (bytes32) {
        require(approvedAccessors[msg.sender] == true);
        return(privateData.mobile);
    }

    function getPrivateEmail() public view returns (bytes32) {
        require(approvedAccessors[msg.sender] == true);
        return(privateData.email);
    }

    function _toLower(string str) internal pure returns (string) {
        bytes memory bStr = bytes(str);
        bytes memory bLower = new bytes(bStr.length);
        for (uint i = 0; i < bStr.length; i++) {
            // Uppercase character...
            if ((bStr[i] >= 65) && (bStr[i] <= 90)) {
                // So we add 32 to make it lowercase
                bLower[i] = bytes1(int(bStr[i]) + 32);
            } else {
                bLower[i] = bStr[i];
            }
        }
        return string(bLower);
    }   
}