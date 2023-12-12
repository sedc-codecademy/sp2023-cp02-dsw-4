using Dropshiping.BackEnd.Dtos.ProductSizeDtos;
using Dropshiping.BackEnd.Services.ProductServices.Interface;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace Dropshiping.BackEnd.Project.Controllers
{
    [Authorize(Roles = "Admin")]
    [Route("api/[controller]")]
    [ApiController]
    public class ProductSizeController : ControllerBase
    {
        private IProductSizeService _productSizeService;
        public ProductSizeController(IProductSizeService productSizeService)
        {
            _productSizeService = productSizeService;
        }

        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                var productSize = _productSizeService.GetAll();
                return Ok(productSize);
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
                var productSize = _productSizeService.GetById(id);
                return Ok(productSize);
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

        [HttpPost("AddProductSize")]
        public IActionResult AddProductSize(AddProductSizeDto addProductSizeDto)
        {
            try
            {
                _productSizeService.Add(addProductSizeDto);
                return StatusCode(StatusCodes.Status204NoContent, "ProductSize added");
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

        [HttpPut("UpdateProductSize")]
        public IActionResult UpdateProductsSize(ProductSizeDto productSizeDto)
        {
            try
            {
                _productSizeService.Update(productSizeDto);
                return StatusCode(StatusCodes.Status204NoContent, "ProductSize updated");
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

        [HttpDelete("{id}")]
        public IActionResult DeleteById(string id)
        {
            try
            {
                _productSizeService.DeleteById(id);
                return StatusCode(StatusCodes.Status204NoContent, "Product Size deleted");
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
