using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Edusky.Models;

namespace Edusky.Controllers
{
    public class AdminController : Controller
    {
        //
        // GET: /Admin/
        //private SkyEduDataContext _dataContext = new SkyEduDataContext();
        public ActionResult Index()
        {
            //if (Session["us"] != null)
           // {
                return View();
           // }
            //else
           // {
           //     return RedirectToAction("Login", "Admin");
            //}
        }

        public ActionResult Login()
        {
            return PartialView();
        }
        //[HttpPost]
        //public ActionResult Login(FormCollection Form, User pro)
        //{
        //    var _Username = Form["username"];
        //    var _Password = Form["password"];
        //    if (String.IsNullOrEmpty(pro.UserName))
        //        ModelState.AddModelError("username", "");
        //    else
        //        if (String.IsNullOrEmpty(_Password))
        //            ModelState.AddModelError("password", "");
        //        else
        //        {
        //            var m_UserID = (from m in _dataContext.Users
        //                            where m.UserName == _Username && m.Password == _Password && m.UserTypeId == 1
        //                            select m).ToList();
        //            if (m_UserID.Count > 0)
        //            {
        //                var UserObj = (User)m_UserID[0];

        //                Session["us"] = UserObj;
        //                return RedirectToAction("Index", "Admin");
        //            }
        //            else
        //            {
        //                ModelState.AddModelError("Invalid", "User name or password is wrong !");
        //            }
        //        }
        //    return View();
        //}

        //public ActionResult Logout()
        //{
        //    Session["us"] = null;
        //    return RedirectToAction("Login", "Admin");
        //}

    }
}
