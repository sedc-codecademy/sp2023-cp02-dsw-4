﻿using Dropshiping.BackEnd.Dtos.OrderitemDtos;
using Dropshiping.BackEnd.Dtos.ProductSizeDtos;
using Dropshiping.BackEnd.Services.ProductServices.Implementation;
using Dropshiping.BackEnd.Services.ProductServices.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Dropshiping.BackEnd.Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderitemController : ControllerBase
    {
        private IOrderitemService _orderitemService;
        public OrderitemController(IOrderitemService orderitemService)
        {
            _orderitemService = orderitemService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                var orderitem = _orderitemService.GetAll();
                return Ok(orderitem);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error happend");
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetById(string id)
        {

            try
            {
                var orderitem = _orderitemService.GetById(id);
                return Ok(orderitem);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error happend");
            }
        }

        [HttpPost("AddOrderitem")]
        public IActionResult AddOrderitem(OrderitemAddDto orderitemAddDto)
        {
            try
            {
                _orderitemService.Add(orderitemAddDto);
                return StatusCode(StatusCodes.Status204NoContent, "Orderitem added");
            }
            catch (ArgumentNullException ex)
            {
                return BadRequest(ex.Message);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error happend");
            }
        }

        [HttpPut("UpdateOrderitem")]
        public IActionResult UpdateOrderitem(OrderitemDto orderitemDto)
        {
            try
            {
                _orderitemService.Update(orderitemDto);
                return StatusCode(StatusCodes.Status204NoContent, "Orderitem updated");
            }
            catch (ArgumentNullException ex)
            {
                return BadRequest(ex.Message);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error happend");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteById(string id)
        {
            try
            {
                _orderitemService.DeleteById(id);
                return StatusCode(StatusCodes.Status204NoContent, "Orderitem  deleted");
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error happend");
            }
        }
    }
}
