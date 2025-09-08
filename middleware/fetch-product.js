module.exports = (req, res, next) => {
    req.product = 'mjölkk'
    console.log('shop request')
    next()
}