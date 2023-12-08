﻿using Dropshiping.BackEnd.Dtos.RatingDtos;
using Dropshiping.BackEnd.Dtos.UserDtos;
using Dropshiping.BackEnd.Services.UserServices.Implementation;
using Dropshiping.BackEnd.Services.UserServices.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using XAct.Security;

namespace Dropshiping.BackEnd.Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CardController : ControllerBase
    {
        private ICardService _cardService;

        public CardController(ICardService cardService)
        {
            _cardService = cardService;
        }
        [HttpGet]
        public IActionResult GetAll()
        {
            try
            {
                var cards = _cardService.GetAll();

                return Ok(cards);
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
                var card = _cardService.GetById(id);

                return Ok(card);
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
        public IActionResult DeleteCard(string id)
        {
            try
            {

                _cardService.DeleteById(id);

                return StatusCode(StatusCodes.Status204NoContent, "Card deleted");

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
        [HttpPost("AddCard/{id}")]
        public IActionResult AddNewCardByUserId(string id, [FromBody] AddNewCardDto addCardDto)
        {
            try
            {
                _cardService.Add(id, addCardDto);
                return Ok("Card is created successfully!");
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (InvalidDataException ex)
            {
                return BadRequest(ex.Message);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error happend");
            }
        }

        [HttpPut("UpdateCard")]
        public IActionResult UpdateCard([FromBody] CardDto card)
        {
            try
            {
                _cardService.Update(card);

                return StatusCode(StatusCodes.Status204NoContent, "Card updated");
            }
            catch (KeyNotFoundException ex)
            {
                return NotFound(ex.Message);
            }
            catch (ArgumentException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (NotAuthorizedException ex)
            {
                return Forbid(ex.Message);
            }
            catch
            {
                return StatusCode(StatusCodes.Status500InternalServerError, "Error happend");
            }
        }
    }
}