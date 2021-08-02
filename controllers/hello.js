
// export hello function 

exports.hello = (req, res) => {
    res.json({
        "hello": ["chris", "ben"]
    })
};