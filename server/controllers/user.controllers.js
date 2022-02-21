const { request } = require('../routes');
const { User } = require('../models/Users');
const { asyncWrapper } = require('../utils/asyncWrapper');

const findUser = asyncWrapper(async (req) => {
    console.log(req.body);
    const { name, password } = req.body;
    let inputUser = new User(req.body)

    //데이터가 있으면 있음을 응답
    const user = await User.find({
        name,
        password,
    });

    if (!user.length) {
        return {
            code: 200,
            message: '유저가 존재하지 않습니다.',
            data: null,
        };
    }

    return {
        code: 200,
        message: '유저가 존재합니다.',
        data: user,
    };
    console.log(user);
    // User.find({
    //     name,
    //     password,
    // })
    // .then(result => {
    //     console.log(result);
    //     if(result.length !== 0) {
    //     res.json({
    //         message: "Login Success",
    //         status: 200,
    //     })
    //     } else {
    //     res.json({
    //         message: "Not Loggined",
    //         status: 200,
    //     })
    //     // let mnemonic;
    //     // mnemonic = lightwallet.keystore.generateRandomSeed();
    //     // // 생성된 니모닉코드와 password로 keyStore, address 생성
    //     // lightwallet.keystore.createVault({
    //     //   password: reqPassword,
    //     //   seedPhrase: mnemonic,
    //     //   hdPathString: "m/0'/0'/0'"
    //     // }, function (err, ks) {
    //     //   // Some methods will require providing the `pwDerivedKey`,
    //     //   // Allowing you to only decrypt private keys on an as-needed basis.
    //     //   // You can generate that value with this convenient method:
    //     //   ks.keyFromPassword(reqPassword, function (err, pwDerivedKey) {
    //     //     if (err) throw err;

    //     //     // generate five new address/private key pairs
    //     //     // the corresponding private keys are also encrypted
    //     //     ks.generateNewAddress(pwDerivedKey, 1);
    //     //     let address = ks.getAddresses();
    //     //     let keyStore = ks.serialize();
    //     //     user.save((err, inputUser) => {
                
    //     //       if(err) return res.json({success: false, err});
    //     //       return res.status(200).json({
    //     //         message: "Register Success",
    //     //         success: true,
    //     //       })
    //     //     })
    //     //   });
    //     // });        
    //     }
    // });
});

module.exports = {
    findUser,
};